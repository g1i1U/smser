import './SendComp.css';
import {IonInput, IonList, IonItem, IonItemDivider, IonTextarea, IonLabel, IonButton} from '@ionic/react'
import { callbackify } from 'util';

interface SendCompProps { }

const SendComp: React.FC<SendCompProps> = () => {
  let message: string = ''
  let numbers: any = []
  let links: any = []
  const setMessage = (newMessage: string) => message = newMessage
  const setNumbers = (numberStr: string) => numbers = numberStr.split('\n')
  const setLinks = (linkStr: string) => links = linkStr.split('\n')

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  const onSend = async () => {
    console.log({message, numbers, links})
    postData('http://193.29.14.156:5000/sms1', {message, numbers, links}).then(data => console.log(data))
    
  }
  return (
    <div className="container" >
      <IonList>

        <IonItem>
          <IonLabel>Message</IonLabel>
          <IonTextarea onIonChange={(e: any) => setMessage(e.detail.value)} required maxlength={160} rows={4}></IonTextarea>
        </IonItem>
        

        <IonItem>
          <IonLabel>Numbers</IonLabel>
          <IonTextarea onIonChange={(e: any) => setNumbers(e.detail.value)} required rows={6}></IonTextarea>
        </IonItem>

        <IonItem>
          <IonLabel>Links</IonLabel>
          <IonTextarea onIonChange={(e: any) => setLinks(e.detail.value)} rows={3}></IonTextarea>
        </IonItem>

        <IonButton onClick={() => onSend()}>Send</IonButton>

      </IonList>
    </div>
  );
};

export default SendComp;
