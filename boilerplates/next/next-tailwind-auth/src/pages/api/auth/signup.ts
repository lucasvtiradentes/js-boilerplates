import { hash } from 'bcryptjs';
import User from '../../../models/User';
import connectMongo from '../../../utils/database';

export default async function handler(req: any, res: any) {
  connectMongo().catch((error) => res.json({ error: 'Connection Failed...!' }));

  if (req.method === 'POST') {
    try {
      if (!req.body) return res.status(404).json({ error: "Don't have form data...!" });
      const { username, email, password } = req.body;

      const checkExistingEmail = await User.findOne({ email });
      if (checkExistingEmail) return res.status(422).json({ message: 'Email Already Exists...!' });

      const checkExistingUser = await User.findOne({ username });
      if (checkExistingUser) return res.status(422).json({ message: 'User Already Exists...!' });

      const createdUser = await User.create({ username, email, password: await hash(password, 12) });
      res.status(201).json({ status: true, user: createdUser });
    } catch (e: any) {
      return res.status(422).json({ message: e.message });
    }
  } else {
    res.status(500).json({ message: 'HTTP method not valid only POST Accepted' });
  }
}
