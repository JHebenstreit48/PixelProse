import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const BlueprintBasics = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/Blueprints/BlueprintBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Blueprint Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BlueprintBasics;
