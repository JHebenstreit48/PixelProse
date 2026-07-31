import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
