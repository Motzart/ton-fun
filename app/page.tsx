// @ts-nocheck
'use client';

import {
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input
} from "@nextui-org/react";
import Feed from '@/components/Feed';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function Home() {
  const TradeSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(180, 'Too Long!')
      .required('Required'),
    ticker: Yup.string()
      .min(2, 'Too Short!')
      .max(180, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(380, 'Too Long!')
      .required('Required'),
    imageUrl: Yup.string().url().required('Required'),
    // twitterUrl: Yup.string().required('Required'),
    // telegramUrl: Yup.string().required('Required'),
    // website: Yup.string().required('Required'),
  });
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <div className="flex w-full justify-center items-center py-24">
        <Link className="text-2xl font-bold" href="#" onClick={onOpen}>[===\ Start New Coin /===]</Link>
      </div>
      <Feed/>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Start New Coin</ModalHeader>
              <ModalBody>
                <Formik
                  initialValues={{
                    name: '',
                    ticker: '',
                    description: '',
                    imageUrl: '',
                    // twitterUrl: '',
                    // telegramUrl: '',
                    // website: ''
                  }}
                  validationSchema={TradeSchema}
                  onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => {
                    console.log(errors)
                    return (
                      <Form className="flex flex-col">
                        <Field name="name">
                          {({
                              field,
                              form: { errors },
                            }) => (
                              <div className="h-[85px]">
                                <Input type="text" {...field} label="Name" isInvalid={errors.name} errorMessage={errors.name} color={errors.name ? "danger" : ""}/>
                              </div>
                          )}
                        </Field>
                        <Field name="ticker">
                          {({
                              field,
                              form: { errors },
                            }) => (
                            <div className="h-[85px]">
                              <Input type="text" {...field} label="Ticker" isInvalid={errors.ticker} errorMessage={errors.ticker} color={errors.ticker ? "danger" : ""}/>
                            </div>
                          )}
                        </Field>
                        <Field name="description">
                          {({
                              field,
                              form: { errors },
                            }) => (
                            <div className="h-[85px]">
                              <Input type="text" {...field} label="Description" isInvalid={errors.description} errorMessage={errors.description} color={errors.description ? "danger" : ""}/>
                            </div>
                          )}
                        </Field>
                        <Field name="imageUrl">
                          {({
                              field,
                              form: { errors },
                            }) => (
                            <div className="h-[85px]">
                              <Input type="text" {...field} label="Image Url" isInvalid={errors.imageUrl} errorMessage={errors.imageUrl} color={errors.imageUrl ? "danger" : ""}/>
                            </div>
                          )}
                        </Field>
                        {/*<Field name="ticker" size="sm" type="ticker" label="Ticker" component={Input}/>*/}
                        {/*{errors.ticker && touched.ticker ? (*/}
                        {/*  <div>{errors.ticker}</div>*/}
                        {/*) : null}*/}
                        {/*<Field name="description" size="sm" type="description" label="Description" component={Input} />*/}
                        {/*{errors.description && touched.description ? <div>{errors.description}</div> : null}*/}
                        {/*<Field name="imageUrl" size="sm" type="imageUrl" label="Image Url" component={Input} />*/}
                        {/*{errors.imageUrl && touched.imageUrl ? <div>{errors.imageUrl}</div> : null}*/}
                        {/*<Field name="twitterUrl" size="sm" type="twitterUrl" label="Twitter Url" component={Input} />*/}
                        {/*{errors.twitterUrl && touched.twitterUrl ? <div>{errors.twitterUrl}</div> : null}*/}
                        {/*<Field name="telegramUrl" size="sm" type="telegramUrl" label="Telegram Url" component={Input} />*/}
                        {/*{errors.telegramUrl && touched.telegramUrl ? <div>{errors.telegramUrl}</div> : null}*/}
                        {/*<Field name="website" size="sm" type="website" label="Website Url" component={Input} />*/}
                        {/*{errors.website && touched.website ? <div>{errors.website}</div> : null}*/}
                        <Button size="md" color="primary" fullWidth type="submit">Submit</Button>
                      </Form>
                    )
                  }}
                </Formik>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
