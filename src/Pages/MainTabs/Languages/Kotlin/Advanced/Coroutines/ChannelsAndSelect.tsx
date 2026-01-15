import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ChannelsAndSelect = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Coroutines/ChannelsAndSelect';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Channels & Select" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChannelsAndSelect;
