import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const BehaviorsAndInstanceVars = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/ObjectsAndBehaviors/BehaviorsAndInstanceVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Behaviors & Instance Vars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BehaviorsAndInstanceVars;
