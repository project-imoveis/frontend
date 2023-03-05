import { useState } from "react";
import { PhotoUploader } from "../photoUploader";
import { unitTypes } from "./data";

export default function CreatePropertyForm() {
  const [usageType, setUsageType] = useState<string>("residential");
  const [unitType, setUnitType] = useState<string>("home");
  const [unitSubType, setUnitSubType] = useState<string>("UnitSubType_NONE");
  return (
    <form className="newProperty_form">
      <div className="newProperty_form_group newProperty_form_group-text">
        <label>Título</label>
        <input className="newProperty_form_input" type="text" placeholder="Título do anúncio" />
      </div>
      <div className="newProperty_form_group newProperty_form_group-radio">
        <label>O que quer fazer?</label>
        <div className="newProperty_form_group-radio_inputs">
          <div>
            <input type="radio" name="publish_type" id="publish_type_buy" value="buy" />
            <label htmlFor="publish_type_buy">Vender</label>
          </div>
          <div>
            <input type="radio" name="publish_type" id="publish_type_rent" value="rent" />
            <label htmlFor="publish_type_rent">Alugar</label>
          </div>
        </div>
      </div>
      <div className="newProperty_form_group newProperty_form_group-radio">
        <label>Qual o tipo do seu imóvel?</label>
        <div className="newProperty_form_group-radio_inputs">
          <div>
            <input
              type="radio"
              name="usage_type"
              id="usage_type_residential"
              value="residential"
              checked={usageType === "residential" ? true : false}
              onChange={(e) => setUsageType(e.target.value)}
            />
            <label htmlFor="usage_type_residential">Residencial</label>
          </div>
          <div>
            <input
              type="radio"
              name="usage_type"
              id="usage_type_comercial"
              value="comercial"
              checked={usageType === "comercial" ? true : false}
              onChange={(e) => setUsageType(e.target.value)}
            />
            <label htmlFor="usage_type_comercial">Comercial</label>
          </div>
        </div>
      </div>
      <div className="newProperty_form_group newProperty_form_group-select">
        <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
          {unitTypes[usageType == "residential" ? "residential" : "comercial"].map((unitType) => (
            <option key={unitType.value} value={unitType.value}>
              {unitType.label}
            </option>
          ))}
        </select>
      </div>
      <div className="newProperty_form_group newProperty_form_group-select">
        <select value={unitSubType} onChange={(e) => setUnitSubType(e.target.value)}>
          {unitTypes[usageType == "residential" ? "residential" : "comercial"]
            .find((unit) => unit.value === unitType)
            ?.subType.map((unitSubType) => (
              <option key={unitSubType.value} value={unitSubType.value}>
                {unitSubType.label}
              </option>
            ))}
        </select>
      </div>
      <div className="newProperty_form_group newProperty_form_group-text">
        <label>Qual o endereço do imóvel?</label>
        <input className="newProperty_form_input" type="text" placeholder="CEP" />
        <input className="newProperty_form_input" type="text" placeholder="CIDADE" />
        <input className="newProperty_form_input" type="text" placeholder="ESTADO" />
      </div>
      <div className="newProperty_form_group newProperty_form_group-textarea">
        <label>Descrição</label>
        <textarea className="newProperty_form_textarea" placeholder="Descrição do imóvel" />
      </div>
    </form>
  );
}
