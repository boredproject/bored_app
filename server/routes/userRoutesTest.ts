// // server/tests/routes/userRoutes.test.ts
// import { expect } from 'chai';
// import { describe, it } from 'mocha'; // Ces imports sont spécifiques à Mocha
// import request from 'supertest';
// import { app } from '../../app'; // Assurez-vous d'exporter votre application Express depuis le fichier app.js ou app.ts

// describe('User Routes', () => {
//   it('should get user data', async () => {
//     const response = await request(app).get('/user');

//     expect(response.status).to.equal(200);
//     expect(response.body).to.deep.equal({
//       id: 1,
//       username: 'john_doe',
//       email: 'john.doe@example.com',
//     });
//   });
// });
