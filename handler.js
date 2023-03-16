
function Class() {
    opt = document.getElementById('class').value;
    localStorage.setItem('class',opt)
    if (opt == 'Class 1') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
    </select>
    <br><br>
    <button onclick="Subject()">Next</button>
    `
    }
    else if (opt == 'Class 2') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
    </select>
    <br><br>
    <button onclick="Subject()">Next</button>
    `
    }
    else if (opt == 'Class 3') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subject()">Next</button>
    `
    }
    else if (opt == 'Class 4') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subject()">Next</button>
    `
    }
    else if (opt == 'Class 5') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subject()">Next</button>
    `
    }
    else {
        alert('☹ | Sorry, The requested content will be available soon...')
    }
    
}
function Subject() {
    sub = document.getElementById('subject').value;
    cls = localStorage.getItem('class').replace('Class ','');
    if (cls == '1') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','ahhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','aeen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','aemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
` 
        }
    }
    else if (cls == '2') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','bhhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','been1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','bemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
    }
    else if (cls == '3') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','chhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','ceen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','cemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','ceap1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
    }
    else if (cls == '4') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','dhhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','deen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','demh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','deap1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
    }
    else if (cls == '5') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','ehhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','eeen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','eemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','eeap1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} Book For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}')">Download</button>
`
        }
    } 
} 
