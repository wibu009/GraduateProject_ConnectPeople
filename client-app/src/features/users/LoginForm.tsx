import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header, Label, Image } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
    const { userStore } = useStore();

    return (
        <Formik
            initialValues={{ email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.login(values).catch(error => setErrors({ error: 'Invalid email or password' }))}
        >
            {({ handleSubmit, isSubmitting, errors }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' >
                    <Header as='h2' color='teal' fluid >
                        <Image src='/assets/logo_teal.png' /> Login to Reactivities
                    </Header>
                    <MyTextInput fluid icon='user' iconPosition='left' placeholder="Email" name='email' />
                    <MyTextInput fluid icon='lock' iconPosition='left' placeholder="Password" name='password' type="password" />
                    <ErrorMessage name="error" render={() => <Label style={{ marginBottom: 10, border: 'none' }} basic color='red' content={errors.error} />} />
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid ></Button>
                </Form>
            )}
        </Formik>
    )
});