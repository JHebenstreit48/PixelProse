import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BehaviorTrees = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/AI/BehaviorTrees';

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
