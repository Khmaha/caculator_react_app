import { Radio } from 'antd';
import React , {useEffect, useState} from 'react'
import '../scss/SwitchThemeComponent.scss';

function SwitchThemeComponent() {
    const themes=[
        {
            id:0,
            name:'blue-theme',
        },
        {
            id:1,
            name:'light-theme',
        },
        {
            id:2,
            name:'pink-theme',
        },
    ]
    const [selectedTheme, setSelectedTheme]=useState('blue-theme')
    
    useEffect(()=>{
        document.body.className="";
        document.body.classList.add(selectedTheme);
    })
    function onChange(event,theme) {
        setSelectedTheme(theme.name)
        console.log(`switch to ${theme.name}`);
        document.body.className="";
        document.body.classList.add(theme.name);
        let switcher= document.querySelector('.swtich-theme-emp__switcher')
        if(switcher) switcher.style.left=(((theme.id) * 30) + 4) + 'px'; 
      }
    return (
        <div className="swtich-theme">
           <span className="swtich-theme-title">CALC</span>
            <div className="swtich-theme-emp">
                <Radio.Group defaultValue={selectedTheme} buttonStyle="solid" className="swtich-theme-emp__radio-group">
                {
                    themes.map(theme=>{
                        return  <Radio.Button value={theme.id} key={theme.id} className="swtich-theme-emp__radio-btn"  onChange={(e)=>onChange(e,theme)}></Radio.Button>
                    }
                    )
                }
                </Radio.Group>
                <div className="swtich-theme-emp__switcher"></div>
            </div>
        </div>
    )
}

export default SwitchThemeComponent
