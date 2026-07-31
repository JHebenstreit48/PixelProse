import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
