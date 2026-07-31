import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GodotCLIBasics = () => {
  const markdownFilePath = 'Engines/Godot/Tools/CLIAndHeadless/GodotCLIBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="godot CLI Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GodotCLIBasics;
