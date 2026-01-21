import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import * as React from "react";
import { type StringInputProps, set, unset } from "sanity";
import {
	Combobox,
	ComboboxCollection,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	useComboboxFilter,
} from "@/components/ui/combobox";
import { iconList } from "@/sanity/schemaTypes/helpers";

const ICON_OPTIONS = iconList;

export function IconComboboxInput(props: StringInputProps) {
	const { elementProps, onChange, value } = props;
	const filter = useComboboxFilter();
	const [query, setQuery] = React.useState(value ?? "");

	React.useEffect(() => {
		setQuery(value ?? "");
	}, [value]);

	const filteredItems = React.useMemo(() => {
		if (!query) return ICON_OPTIONS;
		return ICON_OPTIONS.filter((icon) => filter.contains(icon, query));
	}, [filter, query]);

	const handleValueChange = React.useCallback(
		(nextValue: string | null) => {
			if (!nextValue) {
				onChange(unset());
				setQuery("");
				return;
			}

			onChange(set(nextValue));
			setQuery(nextValue);
		},
		[onChange],
	);

	const {
		value: _ignoredValue,
		onChange: _ignoredOnChange,
		...inputProps
	} = elementProps;

	return (
		<Combobox
			filter={filter.contains}
			filteredItems={filteredItems}
			inputValue={query}
			items={ICON_OPTIONS}
			limit={10}
			onInputValueChange={(nextQuery) => setQuery(nextQuery)}
			onValueChange={(nextValue) =>
				handleValueChange(typeof nextValue === "string" ? nextValue : null)
			}
			value={value ?? null}
		>
			<ComboboxInput
				{...inputProps}
				placeholder="Search icons..."
				showClear={Boolean(value)}
				startAddon={
					value ? <DynamicIcon name={value as IconName} /> : undefined
				}
			/>
			<ComboboxPopup>
				<ComboboxList>
					<ComboboxEmpty>No icons found</ComboboxEmpty>
					<ComboboxCollection>
						{(iconName) => (
							<ComboboxItem key={iconName} value={iconName}>
								<span className="flex items-center gap-2">
									<DynamicIcon name={iconName as IconName} />
									<span>{iconName}</span>
								</span>
							</ComboboxItem>
						)}
					</ComboboxCollection>
				</ComboboxList>
			</ComboboxPopup>
		</Combobox>
	);
}
