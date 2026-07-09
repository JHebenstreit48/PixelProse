import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomWidgets = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/UI/CustomWidgets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Widgets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomWidgets;
