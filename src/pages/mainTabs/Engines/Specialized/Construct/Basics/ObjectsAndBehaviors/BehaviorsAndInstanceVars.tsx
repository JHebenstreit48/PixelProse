import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
