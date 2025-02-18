import { IUnleashTest, setupApp } from '../../helpers/test-helper';
import metricsExample from '../../../examples/client-metrics.json';
import dbInit, { ITestDb } from '../../helpers/database-init';
import getLogger from '../../../fixtures/no-logger';

let app: IUnleashTest;
let db: ITestDb;

beforeAll(async () => {
    db = await dbInit('metrics_api_client', getLogger);
    app = await setupApp(db.stores);
});

afterEach(async () => {
    await Promise.all([
        db.stores.clientMetricsStoreV2.deleteAll(),
        db.stores.clientInstanceStore.deleteAll(),
    ]);
});

afterAll(async () => {
    await app.destroy();
    await db.destroy();
});

test('should be possible to send metrics', async () => {
    return app.request
        .post('/api/client/metrics')
        .send(metricsExample)
        .expect(202);
});

test('should require valid send metrics', async () => {
    return app.request
        .post('/api/client/metrics')
        .send({
            appName: 'test',
        })
        .expect(400);
});

test('should accept empty client metrics', async () => {
    return app.request
        .post('/api/client/metrics')
        .send({
            appName: 'demo',
            instanceId: '1',
            bucket: {
                start: Date.now(),
                stop: Date.now(),
                toggles: {},
            },
        })
        .expect(202);
});

test('should create instance if does not exist', async () => {
    const instances = await db.stores.clientInstanceStore.getAll();
    expect(instances.length).toBe(0);
    await app.request
        .post('/api/client/metrics')
        .send(metricsExample)
        .expect(202);
    const finalInstances = await db.stores.clientInstanceStore.getAll();
    expect(finalInstances.length).toBe(1);
});
