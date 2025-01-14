"use client";
import React, { useActionState, useState, startTransition } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import ButtonMotion from "@/components/ButtonMotion";
import Stack from "@mui/material/Stack";
import { updateParentAction } from "@/action/action";
import { useRouter } from "next/navigation";
import { useParentStore } from "@/stores/store";
import { grey, pink } from "@mui/material/colors";



const ParentFormRegister = () => {
  const initialState = {
    message: "",
  };
  const router = useRouter();
  const { parentName, phone, relation } = useParentStore();

  const [state, formAction, isPending] = useActionState(
    updateParentAction,
    initialState
  );

  if(state.message){
    router.push("/profile")
  }

  const [selectedRelation, setSelectedRelation] = useState(relation || "");
  const handleRelationChange = (event: SelectChangeEvent) => {
    setSelectedRelation(event.target.value); // Update relation state
  };
  // console.log(state.message);
  // console.log(isPending);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Information</Typography>
        <TextField
          name="parentName"
          label="ParentName"
          variant="outlined"
          defaultValue={parentName}
        />

        <TextField
          name="phone"
          label="Phone"
          variant="outlined"
          defaultValue={phone}
        />
        <FormControl fullWidth>
          <InputLabel id="parent-select-label">Relative</InputLabel>
          <Select
            labelId="parent-select-label"
            value={selectedRelation}
            onChange={handleRelationChange}
            label="Relation"
            name="relation"
          >
            <MenuItem value={"Father"}>Father</MenuItem>
            <MenuItem value={"Mother"}>Mother</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonMotion>
            <Button
              variant="contained"
              sx={{
                color: grey[900],
                bgcolor: grey[300],
                ":hover": { bgcolor: grey[400] },
              }}
              onClick={() => router.back()}
            >
              Back
            </Button>
          </ButtonMotion>
          <ButtonMotion>
            <Button
              variant="contained"
              disabled={isPending}
              sx={{
                bgcolor: pink["A200"],
                ":hover": { bgcolor: pink["A400"] },
              }}
              type="submit"
            >
              {isPending ? "Loading":"Submit"}
            </Button>
          </ButtonMotion>

        </Stack>
      </Stack>
    </form>
  );
};

export default ParentFormRegister;
