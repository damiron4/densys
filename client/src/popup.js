import React,{useState} from 'react'

export default function Popup(props){
    const [name, setName] = useState('');
    const [contactn, setContactn] = useState('');
    const [iin, setiin] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleiin = (e) => {
        setiin(e.target.value);
        setSubmitted(false);
    };
    const handleContactn = (e) => {
        setContactn(e.target.value);
        setSubmitted(false);	
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || iin === '' || contactn === ''  ) {
        setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            try {
                const body = {iin, name, contactn}
                const response = await fetch("http://localhost:5001/register/patient", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                const jsonData = await response.json();
                console.log(jsonData)
            } catch(error){
                console.error(error.message)
            }
        }
    };
    return(props.trigger) ?
    (
        <div className='popup'>
            <div className='popup-inner'>
                <div>
					<label className="label">Name</label>
					<input onChange={handleName} className="input"
					value={name} type="text" />
				</div>
                <div>
					<label className="label">IIN number</label>
					<input maxLength={12}
					onChange={handleiin} className="input" 
					value={iin} type="number" />
				</div>
                <div>
					<label className="label">Contact number</label>
					<input onChange={handleContactn} className="input"
					value={contactn} type="number" />
				</div>
                <button onClick={()=>props.setTrigger(false)} className="button-close" type="submit">
			        Close
			    </button>
                <button onClick={()=>props.setTrigger(false)} className="button" type="submit">
			    Register
			    </button>
                {props.children}
            </div>
        </div>
    ):"";
}
