import React, {useState, useEffect, useRef} from 'react';

import "./App.scss";

import CardList from "./components/CardList/CardList";
import NewProduct from "./components/NewProduct/NewProduct";
import classNames from "classnames";
import TemplateList from "./components/TemplatesList/TemplatesList";
import Logo from "./images/Logo";
import Modal from "./components/Modal/Modal";
import ConfirmPopup from "./components/ConfirmPopup/ConfirmPopup";

const App = () => {
  const [products, updateProducts] = useState([
    {
      id: 1,
      title: 'Milk',
      number: '2',
      checked: false,
      image: '',
    },
    {
      id: 2,
      title: 'Bread',
      number: '5',
      checked: false,
      image: '',
    },
    {
      id: 3,
      title: 'Juice',
      number: '1',
      checked: false,
      image: '',
    },
  ]);

  const getInitialTemplates = () => {

    let templatesFromLocalStorage = JSON.parse(localStorage.getItem('my_products'));

    return (templatesFromLocalStorage === null) ? [] : templatesFromLocalStorage;
  }

  const [templates, updateTemplates] = useState(getInitialTemplates());

  const [errors, updateErrors] = useState({
    templateFormError: '',
    newProductError: '',
    changeProductError: '',
    template: '',
  });

  const [templateName, setTemplateName] = useState('');

  const [modalState, updateModalState] = useState({
    isShowModal: false
  });

  const [confirmPopupState, updateConfirmPopupState] = useState({
    isShowConfirmPopup: false
  });

  const [mode, setMode] = useState({
    isToggleOn: false
  })

  const [selectedValue, setSelectedValue] = useState({
    selected: ''
  });

  const handleTemplateName = (event) => {
    setTemplateName(event.target.value);
  }

  const addNewProduct = (newProductInfo) => {
    updateProducts((prevProducts) => {
      return[...prevProducts, newProductInfo];
    });
  }

  const removeProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);

    updateProducts(newProducts);
  }

  const handleDarkAndLightMode = () => {
    setMode(prevState => ({isToggleOn: !prevState.isToggleOn}))
  }

  const appClassNames = classNames('app', {
    'app--dark' : mode.isToggleOn
  });

  const toggleButtonClassNames = classNames('toggle-button', {
    'toggle-button--on' : mode.isToggleOn
  });


  const handleDateSort = () => {
    products.sort((a, b) => (a.id > b.id) ? 1 : -1);

    updateProducts(products.slice());
  }

  const handleAlphabetSort = () => {
    products.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);

    updateProducts(products.slice());
  }

  const handleCheckedSort = () => {
    products.sort((a, b) => {
      if (a.checked > b.checked) {
        return 1;
      } else if (a.checked < b.checked) {
        return -1;
      } else {
        return 0;
      }
    });

    updateProducts(products.slice());
  }

  const handleSort = (selectedSort = selectedValue.selected) => {
    if (selectedSort === 'date') {
      handleDateSort();
    } else if (selectedSort === 'alphabet') {
      handleAlphabetSort();
    } else handleCheckedSort();
  }

  const handleSaveNewProductInfo = (changedProduct) => {
    let changedProductIndex = products.findIndex(product => product.id === changedProduct.id);

    products[changedProductIndex] = changedProduct;
    updateProducts(products.slice());
  }

  const generateNewID = () => {

    let newID;

    if (templates.length !== 0) {
      const lastTemplate = templates[templates.length - 1];
      newID = lastTemplate.id + 1;
    } else {
      newID = 1;
    }

    return newID;
  }

  const addListToTemplates = (event) => {
    event.preventDefault();

    const newTemplate = {
      id: generateNewID(),
      name: templateName,
      template: [...products],
      creationDate: new Date().toDateString(),
    }

    if (templateName !== '') {
      updateTemplates((prevTemplates) => {
        return[...prevTemplates, newTemplate];
      });
      handleShowOrHideModal(false);
      handleError({ templateFormError: '' });
    } else {
      handleError({ templateFormError: 'Please enter template name' });
    }
  }

  const handleError = (errorText) => {
    let allErrors = Object.assign(errors, errorText);
    updateErrors({...allErrors});
  }

  const selectTemplate = (selectedTemplate) => {
    updateProducts([...selectedTemplate.template]);
  }

  const handleShowOrHideModal = () => {
    updateModalState(prevState => ({isShowModal: !prevState.isShowModal}));
  }

  const handleShowOrHideConfirmPopup = (selectedTemplate) => {
    updateConfirmPopupState(prevState => ({isShowConfirmPopup: !prevState.isShowConfirmPopup, template: selectedTemplate}));
  }

  const removeTemplate = (id) => {
    const newTemplates = templates.filter((template) => template.id !== id);
    updateTemplates(newTemplates);
    handleShowOrHideConfirmPopup();
  }

  useEffect(() => {
    handleSort();
  }, [JSON.stringify(products)]);

  const useFirstRender = () => {
    const firstRender = useRef(true);
    useEffect(() => {
      firstRender.current = false;
    }, []);
    return firstRender.current;
  }

  const firstRender = useFirstRender();

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem('my_products', JSON.stringify(templates));
    }
  }, [templates]);

  return (
      <div className={appClassNames}>
        <div className="app-content">
          <div className="app-content__header">
            <div className="app-content__logo-wrap">
              <Logo className="app-content__logo" />
              <h1 className="app-content__title">
              List of <span className="app-content__color">products</span>
              </h1>
            </div>
            <button className={toggleButtonClassNames} onClick={handleDarkAndLightMode}>{mode.isToggleOn ? 'Light mode' : 'Dark mode'}</button>
          </div>
          <NewProduct errorValue={errors} handleError={handleError} addNewProduct={addNewProduct} products={products} />
          {
            (products.length > 0)
                ? <>
                  <div className="app-content__list-wrap">
                    <CardList errorValue={errors} handleError={handleError} selectedValue={selectedValue} setSelectedValue={setSelectedValue} handleSort={handleSort} removeProduct={removeProduct} addNewProduct={addNewProduct} products={products} handleSaveNewProductInfo={handleSaveNewProductInfo} />
                    <button className="button button--new-template" onClick={handleShowOrHideModal}>Add list to templates</button>
                    {
                      modalState.isShowModal && <Modal errorValue={errors} modalState={modalState} updateModalState={updateModalState} addListToTemplates={addListToTemplates} handleTemplateName={handleTemplateName} handleShowOrHideModal={handleShowOrHideModal} />
                    }
                  </div>
                  </>
                : <h1 className="empty-list-title">You have not added any product</h1>
          }
          {
              (templates.length > 0) && <div className="app-content__templates"><TemplateList handleShowOrHideConfirmPopup={handleShowOrHideConfirmPopup} removeTemplate={removeTemplate} templates={templates} templateName={templateName} selectTemplate={selectTemplate} /></div>
          }
          <ConfirmPopup confirmPopupState={confirmPopupState} handleShowOrHideConfirmPopup={handleShowOrHideConfirmPopup} removeTemplate={removeTemplate} />
        </div>
      </div>
  );
}

export default App;
