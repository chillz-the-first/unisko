const Segmented = ({ legend, name, options, value, onChange, required, inputRef, error, errorId }) => {
    // Which option is selected, as a number. -1 when nothing is chosen yet.
    const index = options.findIndex((o) => o.value === value);

    return (
        <fieldset className="space-y-2">
            <legend className="block text-navy font-semibold">
                {legend} {required && <span className="text-danger">*</span>}
            </legend>

            <div className="relative inline-grid grid-flow-col auto-cols-fr min-w-[15rem] p-[3px] rounded-[0.875rem] bg-navy/10">
                <span
                    aria-hidden="true"
                    className="absolute top-[3px] bottom-[3px] left-[3px] rounded-[0.6875rem] bg-white shadow-sm
                               transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none"
                    style={{
                        width: `calc((100% - 6px) / ${options.length})`,
                        transform: `translateX(${Math.max(index, 0) * 100}%)`,
                        opacity: index === -1 ? 0 : 1,
                    }}
                />

                {options.map((option, i) => (
                    <div key={option.value} className="relative z-10">
                        <input
                            type="radio"
                            name={name}
                            id={`${name}-${option.value}`}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            ref={i === 0 ? inputRef : undefined}
                            aria-describedby={error ? errorId : undefined}
                            className="sr-only peer"
                        />
                        <label
                            htmlFor={`${name}-${option.value}`}
                            className="flex items-center justify-center min-h-[42px] px-5 rounded-[0.6875rem]
                                       text-sm font-medium text-body cursor-pointer transition-colors
                                       peer-checked:text-navy peer-checked:font-semibold
                                       peer-focus-visible:ring-[3px] peer-focus-visible:ring-focus"
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>

            {error && <p id={errorId} role="alert" className="text-sm text-danger">{error}</p>}
        </fieldset>
    );
};

export default Segmented;