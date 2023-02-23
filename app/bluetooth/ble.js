import BleManager from 'react-native-ble-manager';
import { stringToBytes } from 'convert-string';

/**
 * @param {*} peripheralId the peripheral id
 * @param {*} data a string of the data to be sent
 * @returns true indicating successfully sent data, and false when not sent
 */
export const send = async (peripheralId, data) => {
  try {
    const val = await BleManager.retrieveServices(peripheralId);

    console.log('val val', val);

    await BleManager.writeWithoutResponse(
      peripheralId,
      'FFE0',
      'FFE1',
      stringToBytes(data),
    );

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};