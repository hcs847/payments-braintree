import React, { useEffect, useState } from 'react';
import 'braintree-web';
import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react';

function Home() {
    const [braintreeToken, setBraintreeToken] = useState('');

    useEffect(() => {
        axios.get('/api/braintree/v1/getToken')
            .then(response => {
                setBraintreeToken(response.data.clientToken);
            })
            .catch(err => console.error(err))
    }, []);

    let braintreeInstance;
    const buy = async () => {
        try {
            const { nonce } = await braintreeInstance.requestPaymentMethod();
            console.log("nonce==", nonce);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {!braintreeToken ? (
                <div>
                    <h1>Loading...</h1>
                </div>
            ) : (

                <div className='flex flex-center'>

                    <div className='card'>
                        <DropIn
                            options={{
                                authorization: braintreeToken
                            }}
                            onInstance={instance => {
                                (braintreeInstance = instance);
                            }}
                            onError={error => { console.log("error===", error) }} />
                        <button className='btn' onClick={buy}>Buy</button>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Home;
