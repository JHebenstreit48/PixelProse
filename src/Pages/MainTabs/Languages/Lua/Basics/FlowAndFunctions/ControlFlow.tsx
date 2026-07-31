import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ControlFlow = () => {
  const markdownFilePath = 'Languages/Lua/Basics/FlowAndFunctions/ControlFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Control Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlFlow;
