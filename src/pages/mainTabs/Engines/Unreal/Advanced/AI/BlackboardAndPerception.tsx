import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BlackboardAndPerception = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/AI/BlackboardAndPerception';

  return (
    <>
      <PageLayout>
        <PageTitle title="Blackboard & Perception" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BlackboardAndPerception;
