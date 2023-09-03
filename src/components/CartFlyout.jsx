import { useStore } from '@nanostores/react';
import { isCartOpen } from '../store';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  console.log('CartFlyout', $isCartOpen);

  return $isCartOpen ? (
    <p className="text-red-500">Gnani</p>
  ) : (
    <p className="text-red-500">Konda</p>
  );
}
