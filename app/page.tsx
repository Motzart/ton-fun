// @ts-nocheck
'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure, Input,
} from "@nextui-org/react";
import Feed from '@/components/Feed';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useTonWallet } from '@tonconnect/ui-react';
import JettonInfo from "@/components/JettonInfo";
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

export default function Home() {
  const [tonConnectUi, setOptions] = useTonConnectUI();
  const wallet = useTonWallet();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const TradeSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    symbol: Yup.string()
      .min(3, 'Too Short!')
      .max(5, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(380, 'Too Long!')
      .required('Required'),
    logoUrl: Yup.string().url().required('Required'),
    amount: Yup.number().required('Required')
  });

  const transaction = {
    messages: [
      {
        address: "0QCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8fo2A", // destination address
        amount: "1000000000"
      }
    ]
  }

  return (
    <>
      <button
        type="button"
        className="mt-11 flex w-full h-16 rounded-2xl justify-center items-center text-lg font-semibold text-white bg-gradient-to-r from-[#8C46E6] to-[#0066FF]"
        onClick={onOpen}
        >Create Your Jetton
      </button>
      <JettonInfo />
      <Feed />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Start New Jetton</ModalHeader>
              <ModalBody>
                {wallet ? (
                  <Formik
                    initialValues={{
                      name: '',
                      symbol: '',
                      description: '',
                      logoUrl: '',
                      amount: '1000000000',
                    }}
                    validationSchema={TradeSchema}
                    onSubmit={values => {
                      tonConnectUi.sendTransaction(transaction).then(() => onClose())
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
                          <Field name="symbol">
                            {({
                                field,
                                form: { errors },
                              }) => (
                              <div className="h-[85px]">
                                <Input type="text" {...field} label="Symbol" isInvalid={errors.symbol} errorMessage={errors.symbol} color={errors.symbol ? "danger" : ""}/>
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
                          <Field name="logoUrl">
                            {({
                                field,
                                form: { errors },
                              }) => (
                              <div className="h-[85px]">
                                <Input type="text" {...field} label="Logo Url" isInvalid={errors.logoUrl} errorMessage={errors.logoUrl} color={errors.logoUrl ? "danger" : ""}/>
                              </div>
                            )}
                          </Field>
                          <Field name="amount">
                            {({
                                field,
                                form: { errors },
                              }) => (
                              <div className="h-[85px]">
                                <Input type="text" {...field} label="Amount" isInvalid={errors.amount} errorMessage={errors.amount} color={errors.amount ? "danger" : ""}/>
                              </div>
                            )}
                          </Field>
                          <Button size="md" color="primary" fullWidth type="submit">Submit</Button>
                        </Form>
                      )
                    }}
                  </Formik>
                ) : (
                  <Button size="md" color="primary" fullWidth onClick={() => tonConnectUi.openModal()}>
                    Connect wallet
                  </Button>
                )}

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
