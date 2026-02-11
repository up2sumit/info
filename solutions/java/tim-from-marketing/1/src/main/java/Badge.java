class Badge {
    public String print(Integer id, String name, String department) {

        // If department missing, it's the owner
        if (department == null) {
            department = "OWNER";
        } else {
            department = department.toUpperCase();
        }

        // If id missing, no [id] prefix
        if (id == null) {
            return name + " - " + department;
        }

        return "[" + id + "] - " + name + " - " + department;
    }
}
