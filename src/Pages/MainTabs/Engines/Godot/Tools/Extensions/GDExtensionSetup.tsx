import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GDExtensionSetup = () => {
  const markdownFilePath = 'Engines/Godot/Tools/Extensions/GDExtensionSetup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GDExtension Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GDExtensionSetup;
