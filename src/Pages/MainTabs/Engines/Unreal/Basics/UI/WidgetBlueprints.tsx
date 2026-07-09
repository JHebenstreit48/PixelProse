import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WidgetBlueprints = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/UI/WidgetBlueprints';

  return (
    <>
      <PageLayout>
        <PageTitle title="Widget Blueprints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WidgetBlueprints;
