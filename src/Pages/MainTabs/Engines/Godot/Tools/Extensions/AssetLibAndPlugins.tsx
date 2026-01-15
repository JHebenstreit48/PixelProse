import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssetLibAndPlugins = () => {
  const markdownFilePath = 'Engines/Godot/Tools/Extensions/AssetLibAndPlugins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AssetLib & Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssetLibAndPlugins;
