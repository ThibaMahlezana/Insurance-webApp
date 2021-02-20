function calculate() {
  var benefit1 = document.getElementById("benefit1");
  var benefit2 = document.getElementById("benefit2");
  var members_range_1 = document.getElementById("m1");
  var members_range_2 = document.getElementById("m2");
  var preffered_units = document.getElementById("unit");
  var display_total_members = document.getElementById("sum_members");
  var display_premium = document.getElementById("premium");
  var preffered_units = document.getElementById("unit");
  var road_cover;
  var premium;

  var benefit_plus_5 = {
    age_range_1: {
      1: 32,
      2: 63,
      3: 94,
      4: 126,
      5: 157,
      6: 188,
    },
    age_range_2: {
      1: 56,
      2: 111,
      3: 167,
      4: 222,
      5: 278,
      6: 333,
    },
  };

  var benefit_plus_9 = {
    age_range_1: {
      1: 65,
      2: 130,
      3: 195,
      4: 260,
      5: 325,
      6: 390,
    },
    age_range_2: {
      1: 75,
      2: 149,
      3: 223,
      4: 297,
      5: 372,
      6: 446,
    },
  };

  var total_number_users =
    parseFloat(members_range_1.value) + parseFloat(members_range_2.value);

  if (document.getElementById("r1").checked) {
    road_cover = document.getElementById("r1").value;
  }
  if (document.getElementById("r2").checked) {
    road_cover = document.getElementById("r2").value;
  }
  var sub_premium_1;
  var sub_premium_2;
  if (benefit1.selected) {
    if (road_cover == "yes") {
      sub_premium_1 =
        (benefit_plus_5.age_range_1[preffered_units.value] + 4) *
        members_range_1.value;
      sub_premium_2 =
        (benefit_plus_5.age_range_2[preffered_units.value] + 4) *
        members_range_2.value;
    } else if (road_cover == "no") {
      sub_premium_1 =
        benefit_plus_5.age_range_1[preffered_units.value] *
        members_range_1.value;
      sub_premium_2 =
        benefit_plus_5.age_range_2[preffered_units.value] *
        members_range_2.value;
    }
  } else if (benefit2.selected) {
    if (road_cover == "yes") {
      sub_premium_1 =
        (benefit_plus_9.age_range_1[preffered_units.value] + 4) *
        members_range_1.value;
      sub_premium_2 =
        (benefit_plus_9.age_range_2[preffered_units.value] + 4) *
        members_range_2.value;
    } else if (road_cover == "no") {
      sub_premium_1 =
        benefit_plus_9.age_range_1[preffered_units.value] *
        members_range_1.value;
      sub_premium_2 =
        benefit_plus_9.age_range_2[preffered_units.value] *
        members_range_2.value;
    }
  }

  // calculating final premium
  premium = sub_premium_1 + sub_premium_2;
  // displaying total members
  display_total_members.innerHTML = total_number_users;
  // displaying the premium
  display_premium.innerHTML = premium;
}
