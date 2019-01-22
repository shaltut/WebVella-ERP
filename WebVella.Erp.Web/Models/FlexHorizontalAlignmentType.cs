﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using WebVella.Erp.Api.Models;

namespace WebVella.Erp.Web.Models
{
	public enum FlexHorizontalAlignmentType
	{
		[SelectOption(Label = "Default")]
		None = 1,
		[SelectOption(Label = "Start")]
		Start = 2,
		[SelectOption(Label = "Center")]
		Center = 3,
		[SelectOption(Label = "End")]
		End = 4,
		[SelectOption(Label = "Around")]
		Around = 5,
		[SelectOption(Label = "Between")]
		Between = 6
	}
}
