'use client';

import { useFormik } from 'formik';
import { useState } from 'react';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { SERVER } from '../../../configs/configs';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../Form_layout';
import styles from '../Form.module.css';
import login_validate from '../../../utils/validate';
import ROUTES from '../../../configs/routes';
import { useRouter } from 'next/navigation';
import { useAllowed } from '../../../utils/useAllowed';

export default function Login() {
  const isAllowed = useAllowed('/', 'unauthenticated');
  const router = useRouter();
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: login_validate,
    onSubmit
  });

  async function onSubmit(values: any) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    });

    if (status && status.status === 200) {
      router.push(`${SERVER}/${ROUTES.profile}`);
    }
  }

  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: SERVER });
  }

  async function handleGithubSignin() {
    signIn('github', { callbackUrl: SERVER });
  }

  if (!isAllowed) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <p className="text-gray-800 text-xl font-bold py-1 text-center">Login</p>

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
            <input type="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps('email')} />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>}

          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input type={`${show ? 'text' : 'password'}`} placeholder="password" className={styles.input_text} {...formik.getFieldProps('password')} />
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" onClick={handleGoogleSignin} className={styles.button_custom}>
              Sign In with Google <Image alt="img" src={'/assets/google.svg'} width={20} height={20}></Image>
            </button>
          </div>
          <div className="input-button">
            <button type="button" onClick={handleGithubSignin} className={styles.button_custom}>
              Sign In with Github <Image alt="img" src={'/assets/github.svg'} width={25} height={25}></Image>
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400 ">
          don't have an account yet?{' '}
          <Link className="text-blue-700" href={'/register'}>
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}
