import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomWidgets = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/UI/CustomWidgets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Widgets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomWidgets;
