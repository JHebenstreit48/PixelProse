import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GDExtensionSetup = () => {
  const markdownFilePath = 'Engines/Godot/Tools/Extensions/GDExtensionSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="GDExtension Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GDExtensionSetup;
