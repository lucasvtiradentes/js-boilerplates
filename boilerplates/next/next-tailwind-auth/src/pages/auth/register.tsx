import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { SERVER } from '../../configs/configs';
import ROUTES from '../../configs/routes';
import { registerValidate } from '../../utils/validate';
import styles from './Form.module.css';
import Layout from './Form_layout';

import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
      props: {}
    };
  }

  return {
    props: {}
  };
};

export default function Register() {
  const router = useRouter();
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate: registerValidate,
    onSubmit
  });

  async function onSubmit(values: any) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };

    await fetch(`${SERVER}/api/auth/signup`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          router.push(`${SERVER}/${ROUTES.signIn}`);
        }
      });
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <p className="text-gray-800 text-xl font-bold py-1 text-center">Register</p>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
            <input type="text" placeholder="Username" className={styles.input_text} {...formik.getFieldProps('username')} />
            {/* name="Username"  */}
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          {/* {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>} */}
          <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
            <input type="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps('email')} />
            {/* name="email"  */}
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}
          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input type={`${show.password ? 'text' : 'password'}`} placeholder="password" className={styles.input_text} {...formik.getFieldProps('password')} />
            {/* name="password"  */}
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

          <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
            <input type={`${show.cpassword ? 'text' : 'password'}`} placeholder="Confirm Password" className={styles.input_text} {...formik.getFieldProps('cpassword')} />
            {/* name="cpassword"  */}
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>} */}

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{' '}
          <Link className="text-blue-700" href={'/login'}>
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  );
}
