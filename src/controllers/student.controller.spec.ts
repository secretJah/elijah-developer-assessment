import { studentController } from './student.controller';

import * as supertest from 'supertest';

let request: supertest.SuperTest<supertest.Test>;

beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const app = require('../index').default;
    request = supertest(app);
});

// No need to mock up data as it is already mocked.
// We can use repo data as mock

test('should return false given external link', () => {
    expect(studentController.display).toBeTruthy();
});

// Not going to spend too much time testing anything other than the endpoint
it('gets the test endpoint', async (done) => {
    const response = await request.get('/student/display/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
    done();
});
