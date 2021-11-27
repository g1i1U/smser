import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SendComp from '../components/SendComp';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SMS - SENDER</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SendComp />
      </IonContent>
    </IonPage>
  );
};

export default Home;
