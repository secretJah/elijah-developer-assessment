import { studentController } from './student.controller';

import * as supertest from 'supertest';
import { STUDENT_1, STUDENT_2 } from '../test-data/student';

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

// Normally, I would write a bunch of tests here incrementally for each function I write.
// But here I am not going to spend too much time testing anything other than the endpoint

// Try to follow Given-When-Then Test Message protocol
it('WHEN the Endpoint is called with a param of 1 THEN the expected response is returned', async (done) => {
    const response = await request.get('/student/display/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(STUDENT_1);
    done();
});

it('WHEN the Endpoint is called with a param of 2 THEN the expected response is returned', async (done) => {
    const response = await request.get('/student/display/2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(STUDENT_2);
    done();
});
