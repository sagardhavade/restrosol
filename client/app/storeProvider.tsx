// 'use client';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import store, { persistor } from '../lib/store';

// export default function StoreProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {() => <>{children}</>}
//       </PersistGate>
//     </Provider>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from '../lib/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Provider store={store}>
      {isClient && persistor ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (
        children
      )}
    </Provider>
  );
}
