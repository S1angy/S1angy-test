import styles from './InputForm.module.scss'

export default function InputForm() {
  return (
    
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label className={styles.label}>Введите заголовок</label>
            <input type="text" id="first_name" className={styles.input} required/>
        </div>
        <div>
            <label className={styles.label}>Введите под-текст</label>
            <input type="text" id="last_name" className={styles.input} required/>
        </div>
    </div>
    <button type="submit" className={styles.button} >Submit</button>
</form>

  )
}

