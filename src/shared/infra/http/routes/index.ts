import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
// import passwordRouter from '@modules/users/infra/http/routes/password.routes';
// import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(204).json();
});

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
// routes.use('/profile', profileRouter);
// routes.use('/password', passwordRouter);

export default routes;
