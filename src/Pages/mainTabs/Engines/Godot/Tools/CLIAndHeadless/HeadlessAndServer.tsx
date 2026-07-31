import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
