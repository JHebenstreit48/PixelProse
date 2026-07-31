import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HeadlessAndServer = () => {
  const markdownFilePath = 'Engines/Godot/Tools/CLIAndHeadless/HeadlessAndServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Headless & Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadlessAndServer;
