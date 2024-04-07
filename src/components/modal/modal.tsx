import { useEffect, useState } from 'react';
import styles from './modal.module.scss';
import useMetrika from '../../hooks/useMetrika';
export default function Modal() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { ym } = useMetrika();

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				setIsOpen(false);
				console.log('Нажали кнопку ESC');
			}
		};
		document.addEventListener('keydown', handleEsc);
	}, []);

	const handleButton = () => {
		setIsOpen(true);
		ym('reachGoal', 'click');
	};

	return (
		<div className={styles.wrapper}>
			<button onClick={handleButton}>Открыть модальное окно</button>
			<div className={styles.modal}>
				{isOpen && (
					<div className={styles.container}>
						<button onClick={() => setIsOpen(false)}>
							Закрыть модальное окно
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
