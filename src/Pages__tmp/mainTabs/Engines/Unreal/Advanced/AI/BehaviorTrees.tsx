import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const BehaviorTrees = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/AI/BehaviorTrees';

  return (
    <>
      <PageLayout>
        <PageTitle title="Behavior Trees" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BehaviorTrees;
