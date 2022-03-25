import React from 'react'
import style from './TranslateSelect.module.css'
import Spain from '../../images/flags/flag-spain.png'
import English from '../../images/flags/flag-gb.png'
import { useTranslation } from 'react-i18next'
import ReactSelect, { components } from 'react-select';
import CountryTranslate from './countryTranslate.json'
import '../../../node_modules/flag-icons/css/flag-icons.css'

const createLabel = ( c ) => (
  <>
      <div key={ `${c.name}-${c.code}` } className={style.container__flag}>
          <span className={`${style.flag} fi fi-${c.code} fis` }></span>
      </div>
      <span>{ c.name }</span>
  </>
);
const DropDownIcon = () => <i className="fas fa-caret-down"></i>;

const DropdownIndicator = ( props ) => (
  <components.DropdownIndicator { ...props }>
      <DropDownIcon />
  </components.DropdownIndicator>
);

const orderedCountries = CountryTranslate
  .sort( ( a, b ) => a.name.localeCompare( b.name ) );

const getValue = ( { field } ) => orderedCountries.filter( ( option ) => field.value?.code === option?.code );

const onChange = ( { form, field } ) => ( option ) =>
{
  form.setFieldValue( field.name, option );
};

const selectStyles = {
  control: ( provide, state ) => ( {
      ...provide,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: "200px",
      height: '30px',
      border: 'none',
      borderRadius: '8px',
      outline: 'none',
      fontWeight: 500,
      borderStyle: 'none',
      fontSize: '16px',
      color: '#161717',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer'

  } ),
  singleValue: (provide)=> ({
    ...provide,
    color: '#fff'
  }),
  icon: {
      fill: '#fff'
  },
  container: () => ( {
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'start',
      'position': 'relative',
      'width': '150px',
      'fontSize': '16px',
      'paddingTop': '0',
      'cursor': 'pointer',
      '&:hover': {
          color: '#161717'
      }

  } ),

  option: () => ( {
      'display': 'flex',
      'justifyContent': 'left',
      'padding': '10px',
      'cursor': 'pointer',
      '&:hover': {
          backgroundColor: '#F3F3F3'
      }
  } ),
  indicatorsContainer: () => ( {
      outline: 'none'
  } ),
  indicatorSeparator: () => ( { display: 'none' } )

};

const handleChange = ( { i18n } ) => ( event ) =>
{
  console.log( '>>> event.value:' );
  console.log( event.value );
  i18n.changeLanguage( event.value );
};

const TranslateSelect = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className={ style.translate_container }>
    <ReactSelect
        components={ { DropdownIndicator } }
        options={ orderedCountries }
        styles={ selectStyles }
        getOptionValue={ ( { name } ) => name }
        getOptionLabel={ ( value ) => ( createLabel( value ) ) }
        defaultValue={ {
            code: 'es',
            flag_1x1: 'flags/1x1/es.svg',
            flag_4x3: 'flags/4x3/es.svg',
            iso: true,
            name: 'Español'
        } }
        onChange={ handleChange( { i18n } ) }
    />
    <div className={ style.title__country }>
    </div>
    <div className={ style.arrow_container }>
    </div>
</div>
  )
};

export default TranslateSelect