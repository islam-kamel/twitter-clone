import TwModal from "../modal/modal";
import {useTranslation} from "react-i18next";
import {LANG_KEY} from "../../i18n";
import {useEffect, useState} from "react";
import config from '../../config';


function ChangeColor() {

  const handleSelected = (e) => {
    document.body.setAttribute('data-bs-theme', e.target.value)
    localStorage.setItem(config.colorKey, e.target.value)
  }

  return (
    <div>
      <div className="form-check form-check-inline">
        <div style={{
          width: 100,
          height: 50,
          border: '1px solid #eee',
          backgroundColor: 'white'
        }}
             className={'rounded position-relative'}>
          <label
            style={{
              color: 'black',
              transform: 'translate(-50, -50%)',
              top: '25%',
              left: '50%'
            }}
            htmlFor={'radio'}
            className={'d-block p-0 m-0 position-absolute'}
          >
            Light
          </label>
          <input
            onChange={handleSelected}
            style={{
              transform: 'translate(0, -50%)',
              left: '10%'
            }}
            className="form-check-input position-absolute top-50 p-0 m-0"
            type="radio"
            id="light"
            value="light"
            name={'color'}
          />
        </div>
      </div>
      <div className="form-check form-check-inline">
        <div
          style={{
            width: 100,
            height: 50,
            border: '1px solid #eee',
        }}
          className={'bg-black rounded position-relative'}>
          <label
            style={{
              color: 'white',
              transform: 'translate(-50, -50%)',
              top: '25%',
              left: '50%'
            }}
            htmlFor={'radio'}
            className={'d-block p-0 m-0 position-absolute'}
          >
            Dark
          </label>
          <input
            onChange={handleSelected}
            style={{
              transform: 'translate(0, -50%)',
              left: '10%'
            }}
            className="form-check-input position-absolute top-50 p-0 m-0"
            type="radio"
            id="dark"
            value="dark"
            name={'color'}
          />
        </div>
      </div>
    </div>
  );
}

function ChangeLang(props) {
  const [_, translate] = useTranslation();

  const handleSelected = (e) => {
    translate.changeLanguage(e.target.value)
  }

  return (
    <select defaultValue={props.currentLang} onChange={handleSelected} dir={'auto'} className="form-select" aria-label="Default select example">
      <option selected value={props?.currentLang}>{props?.currentLang}</option>
      <option  value={props?.availableLang}>{props?.availableLang}</option>
    </select>
  );
}

function Settings() {
  const [t] = useTranslation();
  const [currentLang, setCurrentLang] = useState(null);
  const [availableLang, setAvailableLang] = useState(null);

  useEffect(() => {
    setCurrentLang(prev => {
      const current = localStorage.getItem(LANG_KEY) || 'en';
      if (current === 'en') setAvailableLang('ar');
      else setAvailableLang('en');
      setCurrentLang(current)
    })
  }, [])

  return (
    <TwModal id={'settingsModal'}>
      <TwModal.Body>
        <div className={'card border-0'}>
          <div className={'card-body'}>
            <div className={'d-flex flex-column'}>
              <span className={'d-block mb-2 fw-bold'}>{t('settings.choiceLang')}</span>
              <ChangeLang currentLang={currentLang} availableLang={availableLang}/>
            </div>
          </div>
        </div>
        <div className={'card border-0'}>
          <div className={'card-body'}>
            <div className={'d-flex flex-column'}>
              <span className={'d-block mb-2 fw-bold'}>{t('settings.choiceColor')}</span>
              <ChangeColor/>
            </div>
          </div>
        </div>
      </TwModal.Body>
    </TwModal>
  );
}

export default Settings;