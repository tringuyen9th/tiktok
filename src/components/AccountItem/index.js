import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://vietotaku.com/wp-content/uploads/2022/03/Luffy-One-Piece-Red-750x375.jpg?v=1654697368" alt="Hoaa" />
      <div className={cx('info')}>
        <h4 classNames={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;